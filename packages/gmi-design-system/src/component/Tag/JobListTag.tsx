import { JobListBox } from './index.css'

interface Props {
  name: string
}

const JobListTag = ({ name }: Props) => {
  return <div className={JobListBox}>{name}</div>
}

export default JobListTag
