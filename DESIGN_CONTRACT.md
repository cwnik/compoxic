# Icon Design Contract

**Version:** 1.0.0

## Canvas

All icons use the same 24 × 24 drawing area so they have a consistent size and visual footprint.

- Use a 24 × 24 drawing area for every icon.
- Keep the main artwork within the 2–22 area.
- Leave some space around the artwork.
- Touch the outer edge only when it is part of the design.

## Grid

The 24-unit grid is used to place and size every part of the artwork.

- Draw directly on the 24-unit grid.
- Keep measurements simple where possible.
- Avoid unnecessary resizing moving or rotating.
- Keep the drawing easy to understand.

## Stroke

The stroke is the line that forms the icon. Using the same line style keeps the whole library consistent.

- Use a 2-unit line width.
- Use the surrounding text color.
- Use rounded line ends and rounded corners.
- Keep icons as outlines rather than filled shapes.
- Keep the line width consistent throughout the icon.

## Spacing

Good spacing keeps each part of the icon clear and prevents nearby lines from blending together.

- Keep nearby lines far enough apart to remain clear.
- Aim for at least 2 units of open space where practical.
- Avoid very small details.
- Remove or simplify details that disappear at smaller sizes.

## Visual Balance

An icon can be mathematically centered and still look uneven. What matters is how the finished icon looks.

- Start with centered artwork where appropriate.
- Make small adjustments when the icon looks off-center.
- Pay extra attention to arrows circles diagonals and other visually heavy shapes.
- Judge the finished icon by eye as well as by measurement.

## Dual Tone

Every icon uses a strong main layer and a lighter supporting layer. This is the defining visual style of the library.

- Every icon must use two visual layers.
- Use the main layer for the main idea.
- Use the lighter layer for supporting details.
- Use the shared secondary layer for lighter details.
- Keep the lighter layer at 25% opacity.
- Keep the main layer clearly stronger.
- The icon should still be recognizable without the lighter layer.
- Do not use the two layers to show states such as disabled error or loading.

## Color

Icons should work with different interface colors without changing the artwork.

- Use the surrounding text color.
- Do not add fixed colors to the artwork.
- Do not use color effects such as gradients.
- Do not depend on color alone to explain the meaning of an icon.

## SVG

SVG is the drawing format used by the library. Keep each icon simple so it is easy to maintain and works reliably across browsers.

- Use only the basic shapes supported by the library.
- Avoid effects that change or hide parts of the artwork.
- Do not use gradients or repeating patterns.
- Do not use artwork from outside the icon.
- Do not place text or images inside icons.
- Keep the drawing simple and readable.
- Remove unnecessary drawing data.

## Composition

Each icon should contain its own complete artwork so that changing one icon does not change another.

- Do not build one icon from another icon.
- Keep all artwork inside the icon.
- Follow established patterns when creating related icons.

## Symmetry

Matching shapes should have matching measurements so the icon feels balanced.

- Mirror artwork when a shape is symmetrical.
- Keep matching sides aligned.
- Do not draw matching sides separately with slightly different measurements.

## Icon Families

Icons that belong together should share the same shapes proportions and visual details.

- Keep related icons at a similar visual size.
- Reuse established arrow and directional shapes.
- Keep line width consistent across related icons.
- Keep proportions consistent between related icons.

## Naming

Names should clearly describe what an icon represents and should remain stable.

- Use lowercase words separated by hyphens for icon names used in the library.
- Use the IconName format for icon component names.
- Name icons by what they represent.
- Avoid temporary names numbers and revision names.

## Icon Information

Each icon needs basic information so it can be identified searched and organized.

- Give every icon a unique name.
- Include a display name description category shape list tone and tags.
- Mark every icon as dual-tone.
- Keep tags useful and unique.
- Keep the icon name consistent wherever it is used.

## Accessibility

Icons are hidden from screen readers by default and can be given a label when they have meaning on their own.

- Treat icons as decorative by default.
- Support a label or title when needed.
- Keep this behavior in the shared icon wrapper.
- Pass icon settings through to the shared icon wrapper.
- Do not add fixed labels inside individual icons.

## Stable Icon

An icon is ready to be added to the library when its artwork information and behavior meet all of the agreed rules.

- Follow the canvas line style spacing and dual-tone rules.
- Keep the icon clear at small sizes.
- Make the main idea easy to recognize.
- Keep supporting details lighter than the main artwork.
- Keep the drawing simple and readable.
- Complete and check all icon information.
- Pass all automated checks.
- Complete the visual review before adding the icon to the library.

## Review

Use the same checks for every new icon before adding it to the library.

- Check the icon at 16 20 24 32 and 48 pixels.
- Confirm that it is still clear at 16 pixels.
- Check that it looks centered and balanced.
- Compare its line width and spacing with related icons.
- Hide the lighter layer and confirm that the main idea still reads clearly.
- Check it on both light and dark backgrounds.
- Check that no artwork is accidentally cut off.
- Check that artwork does not touch the edge unexpectedly.
- Compare it with related icons for matching shapes and proportions.
- Run the tests.
- Run lint.
- Run typecheck.
- Run the production build.
- Add the icon to the library only after all checks pass.

## Changes

The design rules should change carefully so existing icons remain consistent.

- Avoid changing a general rule for one icon.
- Write down any genuine exceptions.
- Treat changes to the visual style as deliberate changes.
- Update the contract version when existing icons are affected.
