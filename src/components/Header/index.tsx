import logoImg from '../../assets/logo.svg'
export function Header() {
  return (
    <header>
      <img src={logoImg} alt="work/folks-money" />
      <button>
        Nova transação
      </button>
    </header>
  )
}