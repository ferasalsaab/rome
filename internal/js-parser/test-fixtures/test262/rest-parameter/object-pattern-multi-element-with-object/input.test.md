# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `test262 > rest-parameter > object-pattern-multi-element-with-object`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
		end: Object {
			column: 0
			line: 2
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "multiElementWithObject"
				loc: Object {
					filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
					identifierName: "multiElementWithObject"
					end: Object {
						column: 31
						line: 1
					}
					start: Object {
						column: 9
						line: 1
					}
				}
			}
			loc: Object {
				filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
				end: Object {
					column: 70
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: Object {
					filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
					end: Object {
						column: 70
						line: 1
					}
					start: Object {
						column: 68
						line: 1
					}
				}
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
					end: Object {
						column: 67
						line: 1
					}
					start: Object {
						column: 31
						line: 1
					}
				}
				rest: JSBindingObjectPattern {
					rest: undefined
					loc: Object {
						filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
						end: Object {
							column: 66
							line: 1
						}
						start: Object {
							column: 35
							line: 1
						}
					}
					meta: JSPatternMeta {
						optional: undefined
						typeAnnotation: undefined
						loc: Object {
							filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
							end: Object {
								column: 66
								line: 1
							}
							start: Object {
								column: 35
								line: 1
							}
						}
					}
					properties: Array [
						JSBindingObjectPatternProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "a"
									loc: Object {
										filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
										identifierName: "a"
										end: Object {
											column: 37
											line: 1
										}
										start: Object {
											column: 36
											line: 1
										}
									}
								}
								loc: Object {
									filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
									end: Object {
										column: 37
										line: 1
									}
									start: Object {
										column: 36
										line: 1
									}
								}
							}
							value: JSBindingObjectPattern {
								rest: undefined
								loc: Object {
									filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
									end: Object {
										column: 45
										line: 1
									}
									start: Object {
										column: 39
										line: 1
									}
								}
								properties: Array [
									JSBindingObjectPatternProperty {
										key: JSStaticPropertyKey {
											value: JSIdentifier {
												name: "p"
												loc: Object {
													filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
													identifierName: "p"
													end: Object {
														column: 41
														line: 1
													}
													start: Object {
														column: 40
														line: 1
													}
												}
											}
											loc: Object {
												filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
												end: Object {
													column: 41
													line: 1
												}
												start: Object {
													column: 40
													line: 1
												}
											}
										}
										value: JSBindingIdentifier {
											name: "q"
											loc: Object {
												filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
												identifierName: "q"
												end: Object {
													column: 44
													line: 1
												}
												start: Object {
													column: 43
													line: 1
												}
											}
										}
										loc: Object {
											filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
											end: Object {
												column: 44
												line: 1
											}
											start: Object {
												column: 40
												line: 1
											}
										}
									}
								]
							}
							loc: Object {
								filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
								end: Object {
									column: 45
									line: 1
								}
								start: Object {
									column: 36
									line: 1
								}
							}
						}
						JSBindingObjectPatternProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "b"
									loc: Object {
										filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
										identifierName: "b"
										end: Object {
											column: 48
											line: 1
										}
										start: Object {
											column: 47
											line: 1
										}
									}
								}
								loc: Object {
									filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
									end: Object {
										column: 48
										line: 1
									}
									start: Object {
										column: 47
										line: 1
									}
								}
							}
							value: JSBindingObjectPattern {
								rest: undefined
								loc: Object {
									filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
									end: Object {
										column: 53
										line: 1
									}
									start: Object {
										column: 50
										line: 1
									}
								}
								properties: Array [
									JSBindingObjectPatternProperty {
										key: JSStaticPropertyKey {
											value: JSIdentifier {
												name: "r"
												loc: Object {
													filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
													identifierName: "r"
													end: Object {
														column: 52
														line: 1
													}
													start: Object {
														column: 51
														line: 1
													}
												}
											}
											loc: Object {
												filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
												end: Object {
													column: 52
													line: 1
												}
												start: Object {
													column: 51
													line: 1
												}
											}
										}
										value: JSBindingIdentifier {
											name: "r"
											loc: Object {
												filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
												identifierName: "r"
												end: Object {
													column: 52
													line: 1
												}
												start: Object {
													column: 51
													line: 1
												}
											}
										}
										loc: Object {
											filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
											end: Object {
												column: 52
												line: 1
											}
											start: Object {
												column: 51
												line: 1
											}
										}
									}
								]
							}
							loc: Object {
								filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
								end: Object {
									column: 53
									line: 1
								}
								start: Object {
									column: 47
									line: 1
								}
							}
						}
						JSBindingObjectPatternProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "c"
									loc: Object {
										filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
										identifierName: "c"
										end: Object {
											column: 56
											line: 1
										}
										start: Object {
											column: 55
											line: 1
										}
									}
								}
								loc: Object {
									filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
									end: Object {
										column: 56
										line: 1
									}
									start: Object {
										column: 55
										line: 1
									}
								}
							}
							value: JSBindingObjectPattern {
								rest: undefined
								loc: Object {
									filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
									end: Object {
										column: 65
										line: 1
									}
									start: Object {
										column: 58
										line: 1
									}
								}
								properties: Array [
									JSBindingObjectPatternProperty {
										key: JSStaticPropertyKey {
											value: JSIdentifier {
												name: "s"
												loc: Object {
													filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
													identifierName: "s"
													end: Object {
														column: 60
														line: 1
													}
													start: Object {
														column: 59
														line: 1
													}
												}
											}
											loc: Object {
												filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
												end: Object {
													column: 60
													line: 1
												}
												start: Object {
													column: 59
													line: 1
												}
											}
										}
										value: JSBindingAssignmentPattern {
											loc: Object {
												filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
												end: Object {
													column: 64
													line: 1
												}
												start: Object {
													column: 59
													line: 1
												}
											}
											left: JSBindingIdentifier {
												name: "s"
												loc: Object {
													filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
													identifierName: "s"
													end: Object {
														column: 60
														line: 1
													}
													start: Object {
														column: 59
														line: 1
													}
												}
											}
											right: JSNumericLiteral {
												value: 0
												format: undefined
												loc: Object {
													filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
													end: Object {
														column: 64
														line: 1
													}
													start: Object {
														column: 63
														line: 1
													}
												}
											}
										}
										loc: Object {
											filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
											end: Object {
												column: 64
												line: 1
											}
											start: Object {
												column: 59
												line: 1
											}
										}
									}
								]
							}
							loc: Object {
								filename: "test262/rest-parameter/object-pattern-multi-element-with-object/input.js"
								end: Object {
									column: 65
									line: 1
								}
								start: Object {
									column: 55
									line: 1
								}
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
