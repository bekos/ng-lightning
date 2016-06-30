# `<ngl-lookup>`

### Input

  * `pick: any`: currently selected
  * `lookup: (value: string): Observable<any[]> | any[]`: callback to invoke to search for suggestions
  * `open: boolean`: whether option's menu is visible
  * `value?: string`: input filter value
  * `field?: string`: field of a suggested object to use as label
  * `debounce?: number = 200`:  delay so that the actual value update only takes place when a timer expires. A value of 0 triggers an immediate update

### Output

  * `valueChange: EventEmitter<string>`: current input value
  * `pickChange: EventEmitter<any>`: callback when a suggestion is selected
  * `openChange: EventEmitter<boolean>`: option's menu visibility

### Content

  * `template[nglLookupItem]?`: Custom suggestion template inside popup menu.
