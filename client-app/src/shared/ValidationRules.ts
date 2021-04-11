export default class ValidationRules {
  /**
   * Defines the form field as required
   */
  public required(value: string) {
    return !!value || "Required";
  }
}
