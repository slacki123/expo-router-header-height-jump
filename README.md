# useHeaderHeight() jump on iOS 26 (expo-router)

Minimal reproduction: on iOS 26 (Liquid Glass), `useHeaderHeight()` from
`expo-router/react-navigation` first returns the pre-Liquid Glass estimate and
then the native header height, so a body padded by it jumps down during the push.

The whole repro is three files in `src/app/`. The pushed screen has
`headerTransparent: true` and pads its body by `useHeaderHeight()`.

## Run

```bash
pnpm install
pnpm expo run:ios --device "iPhone 17 Pro"
```

Needs an iOS 26 simulator (tested on iOS 26.5, iPhone 17 Pro) and a dev build,
because Liquid Glass headers need an app built with the iOS 26 SDK.

## Steps

1. Tap **Push screen**.
2. Watch the red box under the header and the Metro log.

**Expected:** one value, `headerHeight 116`; the red box stays where it lands.

**Actual:** `headerHeight 100.66666666666666`, then `headerHeight 116`. The red
box is drawn 15.33 pt too high (under the header) for the first 80-200 ms of the
push, then drops into place.

The `autoFocus` input keeps the start of the push busy. Without it the log still
shows both values, but the second one usually lands before the first frame is
drawn, so the jump is not visible.
