/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Builder, Token} from "@internal/formatter";

import {JSBooleanLiteral} from "@internal/ast";

export default function JSBooleanLiteral(
	builder: Builder,
	node: JSBooleanLiteral,
): Token {
	return node.value ? "true" : "false";
}
