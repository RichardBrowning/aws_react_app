import { defineStorage } from "@aws-amplify/backend";

// define a new storage resource named "amplifyNotesDrive"
export const storage = defineStorage({
  name: "amplifyNotesDrive",
  access: (allow) => ({
    "media/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
  }),
});
