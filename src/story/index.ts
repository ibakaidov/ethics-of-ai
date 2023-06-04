import { Plot } from "./Plot";
import { Story } from "./Story";
import { firstChoosePlot } from "./plots/firstChoose";
import { hHStory } from "./stories/HH";
import { mFAStory } from "./stories/MFA";
import { secretDreamStory } from "./stories/SecretDream";
import { studentStory } from "./stories/Student";


export const stories: Story[] = [
    secretDreamStory,
    hHStory, 
    mFAStory,
    studentStory
]

export const plots: Plot[] = [
    firstChoosePlot
]