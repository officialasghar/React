const DiagonalImage = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 1037 582"
    preserveAspectRatio="xMidYMid slice"
    aria-label="Three hikers on a mountain summit"
  >
    <defs>
      <clipPath id="photo">
        <polygon points="0,582 1022,0 1037,0 1037,372 680,582" />
      </clipPath>
    </defs>
    <rect width="1037" height="582" fill="#232d3b" />
    <polygon points="0,500 1000,0 1037,0 1037,0 0,545" fill="#2a3543" />
    <image
      href="/hikers.jpg"
      width="1037"
      height="582"
      y="28"
      preserveAspectRatio="xMaxYMid slice"
      clipPath="url(#photo)"
      onError={() => console.error('Failed to load hero photo: /hikers.jpg')}
    />
    <line x1="-5" y1="590" x2="1030" y2="-8" stroke="#6dffa0" strokeWidth="7" />
    <polygon points="680,582 1037,372 1037,582" fill="#1f2733" />
    <line x1="765" y1="590" x2="1040" y2="428" stroke="#6dffa0" strokeWidth="6" />
  </svg>
)

export default DiagonalImage
