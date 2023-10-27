export const getHourlyData = async ({
  lat,
  lon,
}: {
  lat: string
  lon: string
}) => {
  const data = await fetch(
    `http://localhost:3000/api/weather/hourly?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`,
    {
      next: { revalidate: 900 },
    }
  )

  return data.json()
}