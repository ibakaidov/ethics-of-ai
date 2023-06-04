import { Plot } from "./Plot";
import { Story } from "./Story";
import { firstChoosePlot } from "./plots/firstChoose";
import { hHStory } from "./stories/HH";
import { mFAStory } from "./stories/MFA";
import { secretDreamStory } from "./stories/SecretDream";


export const stories: Story[] = [
    secretDreamStory,
    hHStory, 
    mFAStory
]

export const plots: Plot[] = [
    firstChoosePlot
]