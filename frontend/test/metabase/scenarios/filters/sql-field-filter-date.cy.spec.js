import {
  restore,
  mockSessionProperty,
  openNativeEditor,
} from "__support__/e2e/cypress";

import * as SQLFilter from "./helpers/e2e-sql-filter-helpers";
import * as FieldFilter from "./helpers/e2e-field-filter-helpers";
import * as DateFilter from "./helpers/e2e-date-filter-helpers";

const DATE_FILTER_SUBTYPES = {
  "Month and Year": {
    value: {
      month: "September",
      year: "2017",
    },
    representativeResult: "Durable Steel Toucan",
  },
  "Quarter and Year": {
    value: {
      quarter: "Q2",
      year: "2017",
    },
    representativeResult: "Aerodynamic Linen Coat",
  },
  "Single Date": {
    value: "15",
    representativeResult: "No results!",
  },
  "Date Range": {
    value: {
      startDate: "13",
      endDate: "15",
    },
    representativeResult: "No results!",
  },
  "Relative Date": {
    value: "Past 7 days",
    representativeResult: "No results!",
  },
  "Date Filter": {
    value: {
      timeBucket: "Years",
    },
    representativeResult: "Small Marble Shoes",
  },
};

describe("scenarios > filters > sql filters > field filter > Date", () => {
  beforeEach(() => {
    restore();
    cy.intercept("POST", "api/dataset").as("dataset");

    cy.signInAsAdmin();
    // Make sure feature flag is on regardles of the environment where this is running.
    mockSessionProperty("field-filter-operators-enabled?", true);

    openNativeEditor();
    SQLFilter.enterParameterizedQuery(
      "SELECT * FROM products WHERE {{filter}}",
    );

    SQLFilter.openTypePickerFromDefaultFilterType();
    SQLFilter.chooseType("Field Filter");

    FieldFilter.mapTo({
      table: "Products",
      field: "Created At",
    });
  });

  Object.entries(DATE_FILTER_SUBTYPES).forEach(
    ([subType, { value, representativeResult }]) => {
      describe(`should work for ${subType}`, () => {
        beforeEach(() => {
          FieldFilter.setWidgetType(subType);
        });

        it("when set through the filter widget", () => {
          dateFilterSelector({ filterType: subType, filterValue: value });

          SQLFilter.runQuery();

          cy.get(".Visualization").within(() => {
            cy.findByText(representativeResult);
          });
        });

        it("when set as the default value for a required filter", () => {
          dateFilterSelector({
            filterType: subType,
            filterValue: value,
            isFilterRequired: true,
          });

          SQLFilter.runQuery();

          cy.get(".Visualization").within(() => {
            cy.findByText(representativeResult);
          });
        });
      });
    },
  );
});

function openDateFilterPicker(isFilterRequired) {
  isFilterRequired && SQLFilter.toggleRequired();

  const selector = isFilterRequired
    ? cy.findByText("Select a default value…")
    : cy.get("fieldset");

  return selector.click();
}

function dateFilterSelector({
  filterType,
  filterValue,
  isFilterRequired = false,
} = {}) {
  openDateFilterPicker(isFilterRequired);

  switch (filterType) {
    case "Month and Year":
      DateFilter.setMonthAndYear(filterValue);
      break;

    case "Quarter and Year":
      DateFilter.setQuarterAndYear(filterValue);
      break;

    case "Single Date":
      DateFilter.setSingleDate(filterValue);
      break;

    case "Date Range":
      DateFilter.setDateRange(filterValue);
      break;

    case "Relative Date":
      DateFilter.setRelativeDate(filterValue);
      break;

    case "Date Filter":
      DateFilter.setAdHocFilter(filterValue);
      break;

    default:
      throw new Error("Wrong filter type!");
  }
}