import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const PageTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Ut eget nisi ac lorem molestie tristique eget non leo. Vivamus
        ullamcorper semper hendrerit. Aliquam non ligula id dolor maximus varius
        non porta velit. Vestibulum eget velit convallis, rhoncus arcu eu,
        mattis diam.
      </p>
    </S.Body>
  </S.Content>
)

export default PageTemplate
