import {breakpoints} from "@local/styleguide";

export function screenType(width: number) {

    if (width < breakpoints.xsm) {
        return 'xsm';
    } else if (width < breakpoints.sm) {
        return 'sm';
    } else if (width < breakpoints.md) {
        return 'md';
    } else if (width < breakpoints.bax) {
        return 'bax';
    } else if (width < breakpoints.lg) {
        return 'lg';
    } else {
        return 'lg';
    }
}