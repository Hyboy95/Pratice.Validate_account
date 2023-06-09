export class AccountRegex {
    private ACCOUNT_REGEX: RegExp = /^[_a-z0-9]{6,}$/
    validate(regex: string): boolean {
        return this.ACCOUNT_REGEX.test(regex)
    }
}