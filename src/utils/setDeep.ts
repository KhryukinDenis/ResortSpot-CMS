import { Dispatch, SetStateAction } from "react";

type Class<T = any> = new (...args: any[]) => T;

export function setDeep(obj: any, path: string | any, val: any, setStateFn?: SetStateAction<any>): any {
  setStateFn?.((prev: any) => {
    obj = prev
    return prev
  })

  function recursive(obj: any, path: string | string[], val: any, index?: number): any {
    if (typeof (path) == 'string') {
      path = path.split('.');
    }

    if (path.length > 1) {
      if (!obj[path[0]]) obj[path[0]] = {}
      recursive(obj[path.shift()!], path, val, index);
    } else {
      obj[path[0]] = val;
    }
    return obj
  }

  const result = { ...recursive(obj, path, val) }

  setStateFn?.(result);
  return result;
}

export function setFieldDeep<Base>(
  field: keyofDeep<Base>,
  val: any,
  setState: Dispatch<SetStateAction<Base | any>>,
  cls?: Class<Base>,
) {
  if (cls) return setState((prevState: Base) => new cls(setDeep({ ...prevState }, field, val)));
  return setState((prevState: Base) => setDeep({ ...prevState }, field, val));
}

export type keyofDeep<T> = any
