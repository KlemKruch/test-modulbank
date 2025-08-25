import { createMachine } from "xstate";

export const machine = createMachine({
  id: "player",
  initial: "mini",
  states: {
    mini: {
      meta: {
        description: "The video is just a small image; not playing",
      },
      on: {
        toggle: "full",
      },
    },
    full: {
      entry: "playVideo",
      exit: "pauseVideo",
      meta: {
        description: "The full-screen video",
      },
      on: {
        toggle: "mini",
        "key.escape": "mini",
      },
    },
  },
});
