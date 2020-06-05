const PLAYLISTS = [
  {
    title: "SWEET TEA",
    spotify: `https://open.spotify.com/playlist/3BX6aS8VtYgxcddFK9nokp`,
    description: `Sweet notes; some hot, some cold. Sip slow. Love, - Be.`,
    image: `https://i.scdn.co/image/ab67706c0000da849d6538a1a7f279f6ab451850`,
    tidal: `https://tidal.com/browse/playlist/73059d92-0ef3-4479-b277-4fe7a457353d`,
  },
  {
    title: "ROMANCE DE ROSAS",
    description: `Truly the universal language is music, and love. Since I was a kid, I always marveled at how Spanish personifies love on such a deep and poetic level.`,
    spotify: `https://open.spotify.com/playlist/41RkclkOwj16bmsQUfK1ua`,
    image: `https://i.scdn.co/image/ab67706c0000da84db227f5ba6abeb188766bd7e`,
    tidal: `https://tidal.com/browse/playlist/8f5c0537-0ad8-40ed-b830-ae2d662b0d9d`,
  },
  {
    title: `"IN MY F*%#iNG FEELINZ"`,
    spotify: `https://open.spotify.com/playlist/4WjwWtUtJzvLSpbqBZnr7q`,
    description: `For a while, I've been playing this (loud) & surrendering to the emotions evoked. `,
    image: `https://i.scdn.co/image/ab67706c0000da84dda70893c5a85e92378ac111`,
    tidal: `https://tidal.com/browse/playlist/fa7e9b29-6fcd-426b-b90b-bf3ee3700e04`,
  },
]

const MIXES = [
  {
    title: "BALCONY BOUNCE",
    image: `https://i1.sndcdn.com/artworks-000123296201-oi1v77-t500x500.jpg`,
    href: `https://soundcloud.com/themusicplease/balcony`,
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
