export class Benutzer {
  constructor(
    public name?: string,
    public passwort?: string,
    public id?: number,
    public rollenId?: number,
    public gruppenId?: number,
    public aktiv?: boolean) {
  }
}
// ? <--- ist optionaler parameter
