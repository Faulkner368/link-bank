export default class ValidationRules {
  /**
   * Defines the form field as required
   */
  public required(value: string): boolean | string {
    return !!value || "Required";
  }

  /**
   * Defines the tags as less than 21 characters
   * @param value
   * @returns boolean | string
   */
  public tagSize(value: string): boolean | string {
    return value.length < 21 || `Tag must be shorter 20 characters or less; ${value.length - 20} characters to many`;
  }

  /**
   * Defines the title as less than 51 characters
   * @param value
   * @returns boolean | string
   */
  public titleSize(value: string): boolean | string {
    return value.length < 51 || `Title must be shorter 50 characters or less; ${value.length - 50} characters too many`;
  }

  /**
   * Defines the description as less than 101 characters
   * @param value
   * @returns boolean | string
   */
  public descriptionSize(value: string): boolean | string {
    return value.length < 101 || `Title must be shorter 100 characters or less; ${value.length - 100} characters to many`;
  }

  /**
   * Regex pattern to do a simple validation on url
   * @param value
   * @returns boolean | string
   */
  public isUrl(value: string): boolean | string {
    const pattern = /^(sms:|tel:|mailto:|ftp:\/\/|http:\/\/|https:\/\/)[^ "]+$/;
    return pattern.test(value) || "URL is not valid";
  }

  /**
   * Returns true if a valid email else a string error message
   * @param value
   * @returns boolean | string
   */
  public isEmail(value: string): boolean | string {
    // TODO: not implemented
    return true;
  }

  /**
   * Returns true if a valid password else a string error message
   * @param value
   * @returns boolean | string
   */
   public isPassword(value: string): boolean | string {
    // TODO: not implemented
    return true;
  }

  /**
   * Returns true if no spaces in DisplayName, else false
   * @param value
   * @returns boolean | string
   */
  public isDisplayName(value: string): boolean | string {
    const pattern = /^[^ "]+$/;
    // TODO: not implemented fully
    return pattern.test(value) || "Display name can't contain spaces";
  }

  /**
   * Returns true if no spaces in UserName, else false
   * @param value
   * @returns boolean | string
   */
   public isUserName(value: string): boolean | string {
    const pattern = /^[^ "]+$/;
    // TODO: not implemented fully
    return pattern.test(value) || "UserName can't contain spaces";
  }
 }
