# `[nglWizard]`

### Input

   * `nglPopover: string | TemplateRef`: The content as string or the connected template reference to show.
   * `nglOpen: boolean = false`: Whether popover is visible.
   * `nglPopoverPlacement: 'top' | 'right' | 'bottom' | 'left' = 'top'`: Position relative to host element.
   * `nglPopoverDelay?: number | number[]`: Delay in milliseconds until it opens/closes. If you wish to specify different delays for opening and closing, you may provide an array of two different values.
   * `nglInteractive?: boolean = false`: Give the possibility to interact with the content of the popover. User has to move the cursor to the popover before it starts closing (this lapse of time has its duration set by the `nglPopoverDelay` option).
   * `nglTooltip?: boolean`: Whether popover looks like tooltip.
   * `nglPopoverTheme?: string`: Theme you want to apply. [See available themes.](https://www.lightningdesignsystem.com/components/utilities/themes/#flavor-color)

### Output

 * `nglPopoverToggled: EventEmitter<boolean>`: Event when actual popover elements becomes visible/hidden.

### Export (nglPopover)

  * `open(delay?: number)`: "Manually" trigger open. Optionally specify a `delay` different than `nglPopoverDelay`'s'.
  * `close(delay?: number)`: "Manually" trigger close. Optionally specify a `delay` different than `nglPopoverDelay`'s'.
  * `position(async = true)`: Reposition popover instance, synchronously or asynchronously depending on `async`.


# `[nglPopover][nglPopoverBehavior]`
