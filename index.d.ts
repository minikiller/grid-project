declare module 'grid-project/components/base/base' {
  export const tcBaseProps: {
      tcData: {
          type: ArrayConstructor;
          required: boolean;
      };
      tcColumns: {
          type: ArrayConstructor;
          required: boolean;
      };
  };
  export const tcBaseEvents: string[];
  export const useBase: (props: any, emits: any) => {
      onRowClick: (event: any) => void;
      columnReorder: (event: any) => void;
      mycolumns: any;
  };

}
declare module 'grid-project/components/checkbox/CheckboxEventType' {
  export namespace CheckboxEventType {
      const selectChanged = "selectChanged";
      const dataChanged = "dataChanged";
  }

}
declare module 'grid-project/components/checkbox/checkbox' {
  export const tcCheckboxEvents: string[];
  export const useCheckbox: (props: any, emits: any) => {
      checkboxColumns: import("vue").ComputedRef<any[]>;
      rdata: {
          items: any[];
      };
      onSelectionChange: (event: any) => void;
      onRowClick: (event: any) => void;
      onHeaderSelectionChange: (event: any) => void;
  };

}
declare module 'grid-project/components/filter/filter' {
  export const tcFilterProps: {};
  export const tcFilterEvents: string[];
  export const filterData: import("vue").Ref<{
      logic: "and" | "or";
      filters: (any | {
          field?: string | Function | undefined;
          operator: string | Function;
          value?: any;
          ignoreCase?: boolean | undefined;
      })[];
  }>;
  export const useFilter: (props: any, emits: any) => {
      onFilterChange: (ev: any) => void;
      filterItems: import("vue").ComputedRef<any>;
  };

}
declare module 'grid-project/components/group/group' {
  export const useGroup: (props: any, emits: any) => {
      dataStateChange: (event: any) => void;
      expandChange: (event: any) => void;
      rdata: {
          gridData: {
              data: any[];
              total: number;
          };
          skip: number;
          take: number;
          group: never[];
          filter: undefined;
          sort: never[];
          expandedItems: never[];
      };
      items: import("vue").ComputedRef<{
          data: any[];
          total: number;
      }>;
  };

}
declare module 'grid-project/components/select/select' {
  export const tcSelectProps: {
      idField: {
          type: StringConstructor;
          required: boolean;
      };
  };
  export const selectedID: import("vue").Ref<number>;
  export const selectedField = "selected";
  export const useSelect: (props: any, emits: any) => {
      selectedField: string;
      selectedID: import("vue").Ref<number>;
      items: import("vue").ComputedRef<any>;
      onRowClick: (event: any) => void;
  };

}
declare module 'grid-project/components/sort/sort' {
  export const tcSortProps: {
      tcSortColumns: {
          type: ArrayConstructor;
          required: boolean;
      };
  };
  export const tcSortEvents: string[];
  export const sortColumn: import("vue").Ref<never[]>;
  export const useSort: (props: any, emits: any) => {
      sortedItems: import("vue").ComputedRef<any>;
      sortColumn: import("vue").Ref<never[]>;
      onSortChange: (e: any) => void;
  };

}
declare module 'grid-project/components/template/data' {
  export const createRandomData: (count: any) => {
      ProductID: number;
      ProductName: string;
      UnitPrice: number;
      UnitsInStock: number;
  }[];
  export const columns: ({
      field: string;
      title: string;
      width: string;
      filterable: boolean;
      filter?: undefined;
  } | {
      field: string;
      title: string;
      width?: undefined;
      filterable?: undefined;
      filter?: undefined;
  } | {
      field: string;
      filter: string;
      title: string;
      width?: undefined;
      filterable?: undefined;
  })[];

}
declare module 'grid-project/components/test/another' {
  export const useAnother: () => {
      anotherInfo: string;
  };
  export const tcColumnsProp: {
      tcColumns: {
          type: ArrayConstructor;
          required: boolean;
      };
  };

}
declare module 'grid-project/components/test/base' {
  export const useBase: () => {
      msg: () => void;
      baseInfo: string;
  };
  export const tcDataProp: {
      tcData: {
          type: ArrayConstructor;
          required: boolean;
      };
  };

}
declare module 'grid-project/main' {
  import '@progress/kendo-theme-default/dist/all.css';

}
declare module 'grid-project/model/Control' {
  export interface ControlInterface {
      count: number;
      timer: ReturnType<typeof setInterval>;
  }

}
declare module 'grid-project/model/Util' {
  interface ControlInterface {
      count: number;
      timer: ReturnType<typeof setInterval>;
  }
  const resultMap: Map<string, ControlInterface>;
  const action: (key: any) => void;
  const release: (key: any) => void;

}
declare module 'grid-project/model/event-type/EventType' {
  import { CheckboxEventType } from '@/components/checkbox/CheckboxEventType';
  export namespace EventType {
      const checkbox: typeof CheckboxEventType;
  }

}
declare module 'grid-project/router/index' {
  const router: import("vue-router").Router;
  export default router;

}
declare module 'grid-project/slf/test' {
  export {};

}
declare module 'grid-project/test/main' {
  const a: number[];
  const b: number[];
  const c: number[];

}
declare module 'grid-project' {
  import main = require('grid-project/index');
  export = main;
}