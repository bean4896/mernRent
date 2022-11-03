import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import MemoriesList from '../components/memories/MemoriesList'
const DUMMY_DATA= [
  {
    id: 'm1',
    title: '1st Story',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    date: '2021-01-01',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: '2nd story',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    date: '2021-02-01',
    description: 'sadasdasd dadasdasIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as o'
  },
  {
    id: 'm3',
    title: '3rd story',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    date: '2021-03-01',
    description: 'This is a second meetup!'
  },
  {
    id: 'm4',
    title: '4th story',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    date: '2021-04-01',
    description: 'sadasdasd dadasdasIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using dsadsa, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a searc'
  },
  {
    id: 'm5',
    title: '5th story',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    date: '2021-05-01',
    description: 'This is a second meetup!'
  },
  {
    id: 'm6',
    title: '6th story',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    date: '2022-11-03',
    description: 'This is a second meetup!'
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return (
    <div className="max-w-[940px] m-auto">
      <p>Current theme: {theme}</p>
        <MemoriesList memories={DUMMY_DATA} />
      </div>
  )
}
