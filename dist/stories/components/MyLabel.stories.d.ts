/// <reference types="react" />
declare const _default: {
    title: string;
    component: ({ allCaps, backgroundColor, color, fontColor, label, size, }: import("../../components/MyLabel").MyLabelProps) => JSX.Element;
    tags: string[];
    argTypes: {
        size: {
            control: string;
        };
        color: {
            control: string;
        };
        fontColor: {
            control: string;
        };
    };
};
export default _default;
export declare const Basic: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").MyLabelProps>;
export declare const AllCaps: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").MyLabelProps>;
export declare const Secondary: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").MyLabelProps>;
export declare const Tertiary: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").MyLabelProps>;
export declare const CustomFontColor: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").MyLabelProps>;
export declare const CustomBackgroundColor: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").MyLabelProps>;
