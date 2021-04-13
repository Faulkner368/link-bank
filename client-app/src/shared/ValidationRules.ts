export default class ValidationRules {
  /**
   * Defines the form field as required
   */
  public required(value: string) {
    return !!value || "Required";
  }

  /**
   * Regex pattern to do a simple validation on url
   * @param value
   * @returns boolean | string
   */
  public isUrl(value: string): boolean | string {
    const pattern = /^(s:\/\/|sms:|tel:|mailto:|ftp:\/\/|http:\/\/|https:\/\/)[^ "]+$/;
    return pattern.test(value) || "URL is not valid";
  }
}
