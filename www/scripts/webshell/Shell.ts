/**
 * Created by Adrien on 23/03/2015.
 */

import keyword = require('./Keyword');
import appenders =  require('./Appenders');

import Handler = appenders.Handler;
import Appendable = appenders.Appendable;
import Text = appenders.Text;
import Line = appenders.Line;
import LineItem = appenders.LineItem;
import Word = appenders.Word;

/**
 * The Shell class
 * can handle user inputs and delegate the output to the provided Keyword module.
 */
export class Shell {
    input: string;
    private output: Handler;

    constructor(private handleKeyword: keyword.HandleKeyword) {
        this.output = new ConsoleHandler();
    }

    static createDefault(): Shell {
        return new Shell(keyword.handleKeyword);
    }

    handleInput() {
        this.handleKeyword(this.output, this.input);
    }
}

/**
 * private class that print console output on the browser console.log().
 * emulate the console.log() method if not present in the dom.
 */
class ConsoleHandler implements Handler {

    constructor() {
        // emulate console.log for older browser or node.js I guess ?
        if(!window.console){
            window.console = <Console>{
                log() {}
            };
        }
    }

    print(...items: Appendable[]): void {
        var reduced = items.reduce<string>( (text: string, item: Appendable): string => {
            if (item instanceof Line) this.append( item, text);
            else if (item instanceof Text) text = text + item.text;
            else console.log( 'Unknown type of Appendable');
            return text;
        }, "");
        console.log( reduced);
    }

    private append(line: Line, text: string): void {
        text = text + line.items.reduce<string>( (text: string, item: LineItem): string => {
            if (item instanceof Word) text = text + ' ' + item.word;
            else console.log( 'Unknown type of LineItem');
            return text;
        }, "");
    }
}

