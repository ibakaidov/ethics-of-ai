import { Plot } from "./Plot";
import { Story } from "./Story";
import { firstChoosePlot } from "./plots/firstChoose";
import { hHStory } from "./stories/HH";
import { secretDreamStory } from "./stories/SecretDream";


export const stories: Story[] = [
    secretDreamStory,
    hHStory
]

export const plots: Plot[] = [
    firstChoosePlot
]