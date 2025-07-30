import { getStoryblokApi } from "@/app/storyblok";

export const StoryblokProvider = ({ children }) => {
    getStoryblokApi();
    return children;
}