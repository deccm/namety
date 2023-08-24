import firstNames from './resources/firstNames.json';
import lastNames from './resources/lastNames.json';
import { sample } from 'lodash';

export class Name {
  private readonly firstName: string;
  private readonly lastName: string;

  constructor() {
    this.firstName = sample(firstNames)!;
    this.lastName = sample(lastNames)!;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
