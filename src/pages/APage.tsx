import { useNavigate } from "react-router-dom"

export default () => {

  const navigate = useNavigate()

  return <div onClick={() => navigate('/doc/b-page')}>APage</div>
}