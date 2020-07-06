const PLAYLISTS = [
  {
    title: "SWEET TEA",
    spotify: `https://open.spotify.com/playlist/3BX6aS8VtYgxcddFK9nokp`,
    description: `Hot or cool, just always sweet. Jams to be enjoyed in the day or at night, on the couch or in the car. Drink your favorite tea to this, share with your favorite person.`,
    image: `https://i.scdn.co/image/ab67706c0000da849d6538a1a7f279f6ab451850`,
    tidal: `https://tidal.com/browse/playlist/73059d92-0ef3-4479-b277-4fe7a457353d`,
  },
  {
    title: "ROMANCE DE ROSAS",
    description: `Songs in Spanish, poetically personifying all aspects of love. This playlist is rooted in salsa music, but spans across all genres and eras of latin music.`,
    spotify: `https://open.spotify.com/playlist/41RkclkOwj16bmsQUfK1ua`,
    image: `https://i.scdn.co/image/ab67706c0000da84db227f5ba6abeb188766bd7e`,
    tidal: `https://tidal.com/browse/playlist/8f5c0537-0ad8-40ed-b830-ae2d662b0d9d`,
  },
  {
    title: `"IN MY F*%#iNG FEELINZ"`,
    spotify: `https://open.spotify.com/playlist/4WjwWtUtJzvLSpbqBZnr7q`,
    description: `Ya’ know.`,
    image: `https://i.scdn.co/image/ab67706c0000da84dda70893c5a85e92378ac111`,
    tidal: `https://tidal.com/browse/playlist/fa7e9b29-6fcd-426b-b90b-bf3ee3700e04`,
  },
]

const MIXES = [
  {
    title: "BALCONY BOUNCE [STUDIO MIX]",
    image: `https://i1.sndcdn.com/artworks-000123296201-oi1v77-t500x500.jpg`,
    href: `https://soundcloud.com/themusicplease/balcony`,
    description:
      "We brought just enough bounce without jumping off the ledge with this one.",
  },
  {
    title: "RAINY DAZE [RADIO SET]",
    image: "https://i1.sndcdn.com/artworks-000082038929-rz4bdo-t500x500.jpg",
    href: "https://soundcloud.com/themusicplease/rainy_daze",
    description:
      "Live radio set mixed by WATTZBEATZ (4/15/2014) via Music Please Radio: 90.3FM WRiU.",
  },
  {
    title: "ROOM TEMPERATURE [STUDIO MIX]",
    image: "https://i1.sndcdn.com/artworks-000077278968-kha54z-t500x500.jpg",
    href: "https://soundcloud.com/themusicplease/room_temp",
    description:
      "Blended together with remixes, re-edits, covers & our detailed production - this mix brings to life our curatorial and technical reaches while keeping you afloat.",
  },
]

const ItemImageVariants = {
  exit: "hidden",
  initial: "hidden",
  variants: {
    exit: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 0.8,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 30,
    },
  },
}

export { MIXES, PLAYLISTS, ItemImageVariants }
