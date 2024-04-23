import { ValueObject } from './value-object';

export class Name extends ValueObject<string> {
  constructor(name: string) {
    super(Name.capitalizeFirstLetterOfWords(name));
    this.isValid();
  }

  isValid(): boolean {
    return this.value.length > 3;
  }

  private static capitalizeFirstLetterOfWords(name: string): string {
    return name.replace(/\b\w/g, (char) => char.toUpperCase());
  }
}
