import {AppConstants} from "../../app.constant";

/**
 * @author ChiBV
*/

//return true if object is undefined || null || ""
export const stringNullOrEmpty = (stringValue: string | null | undefined) => {
  return stringValue === undefined || stringValue === null || stringValue === "";
}

