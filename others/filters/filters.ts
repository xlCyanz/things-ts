type Filters =
  | "eq"
  | "eqi"
  | "ne"
  | "gt"
  | "lt"
  | "gte"
  | "lte"
  | "in"
  | "notInt"
  | "contains"
  | "notContains"
  | "containsi"
  | "notContainsi"
  | "null"
  | "notNull"
  | "between"
  | "endsWith"
  | "endsWithi"
  | "startsWith"
  | "startsWithi";

type LogicalFilters = "$or" | "$and";

type FilterValue = {
  [filterType in Filters]?: (string | number)[] | string | number;
};

interface FilterQuery {
  [key: LogicalFilters | string]: FilterValue | FilterQuery;
}

function createFilterString(filters: FilterQuery, prefix = "filters", indexRecursive = 0): string {
  const aroundBrackets = (text: unknown) => `[${text}]`;
  const filtersEntries = Object.entries(filters);

  return filtersEntries
    .map(([fieldName, fieldObj], index) => {
      const fieldNameRounded = aroundBrackets(fieldName);

      if (fieldName === "$or" || fieldName === "$and") {
        return createFilterString(fieldObj as FilterQuery, `${prefix}${fieldNameRounded}`, index);
      }

      const fieldObjEntries = Object.entries(fieldObj);

      return fieldObjEntries
        .map(([filter, value]) => {
          return `${prefix}${fieldNameRounded}${aroundBrackets(`$${filter}`)}${aroundBrackets(
            indexRecursive,
          )}=${value}`;
        })
        .flat()
        .join("&");
    })
    .flat()
    .join("&");
}

const filters: FilterQuery = {
  EmpresaNombre: {
    contains: "prueba",
  },
  $or: {
    EstadoId: {
      eq: 2,
    },
  },
};

// filters[EmpresaNombre][$contains][0]=prueba&filters[$or][EstadoId][$eq][1]=2
// filters[EmpresaNombre][$contains][0]=prueba&filters[$and][EstadoId][$eq][1]=2

console.log(
  createFilterString({
    EmpresaNombre: {
      contains: "prueba",
    },
    $or: {
      EstadoId: {
        eq: 2,
      },
    },
  }),
);

console.log(
  createFilterString({
    EmpresaNombre: {
      contains: "prueba",
    },
    $and: {
      EstadoId: {
        eq: 2,
      },
    },
  }),
);
