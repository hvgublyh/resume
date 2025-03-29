declare const require: {
  context: (directory: string, useSubdirectories: boolean, regExp: RegExp) => {
    keys: () => string[];
    (id: string): any;
  };
};

declare namespace NodeJS {
  interface Require {
    context: (directory: string, useSubdirectories: boolean, regExp: RegExp) => {
      keys: () => string[];
      (id: string): any;
    };
  }
}