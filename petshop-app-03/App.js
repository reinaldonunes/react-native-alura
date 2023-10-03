import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import Default from './src/components/Default'
import Routes from './src/routes'

export default function App() {
  return <Default>
      <Routes />
    </Default>
}