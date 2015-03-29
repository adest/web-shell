
import appenders = require('./Appenders');

import Handler = appenders.Handler;
import Line = appenders.Line;
import Text = appenders.Text;

/**
 * Define a callback method that can handle user input
 */
export interface HandleKeyword {
    (handler: Handler, input: string): void
}

/**
 * default handleKeyword method,
 * only output text with the provided input
 * @param handler The handler callback that will print the output
 * @param input The provided input. Should came from user console input
 */
export var handleKeyword: HandleKeyword = function(handler: Handler, input: string) {
    handler.print(new Text(input));
};

/**
 * For test purpose only
 * @param handler
 * @param input
 */
export var handleUnknownKeyword: HandleKeyword = function(handler: Handler, input: string) {
    handler.print(new Text(input), new UnknownAppendable(), new Line(new UnknownLineItem()));
};

class UnknownAppendable implements appenders.Appendable {}

class UnknownLineItem implements appenders.LineItem {}