/**
 * Created by Adrien on 28/03/2015.
 */


/**
 * Define a Handler callback object
 * A callback object allow to print a list of Appendables.
 */
export interface Handler {
    print(...appendable: Appendable[]): void;
}

/**
 * Abstract interface that define Appendable object that will be printed by a Handler.
 */
export interface Appendable {

}

/**
 * Text implementation of an Appendable that will print a text.
 */
export class Text implements Appendable {
    constructor(public text: string) {}
}

/**
 * Line implementation of an appendable that will print a list of child items in a line.
 */
export class Line implements Appendable {
    public items: LineItem[];
    constructor(...items: LineItem[]) {
        this.items = items;
    }
}

/**
 * Abstract interface that define an item of a Line.
 */
export interface LineItem {

}

/**
 * Word implementation of a LineItem that will print a word followed by a space.
 * Should take a color attribute
 * Should be aggregated in a Line object.
 */
export class Word implements LineItem {
    constructor(public word: string, public color: string) {}
}