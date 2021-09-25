import { ReactBridge } from 'ngx-react';

// declare the bridge
export const reactBridge = new ReactBridge()

    // this is a global directive, which will be available on all angualr -> react components
    .addDirective('focus', (focus: boolean, _, elt) => setTimeout(() => focus && elt.focus()))

    // use this to wrap your react components in providers, for instance
    // .addProvider(({ children, injector }) => children);
