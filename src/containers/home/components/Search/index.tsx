import { FaSearch } from 'react-icons/fa';

import { Text } from '@/components/Text';
import { styled } from '@/styles/stitches';

import { IconButton, Input, TextInputContainer } from './styles';

const Form = styled('form', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export function Search() {
  return (
    <Form>
      <Text as="h2" size="5xl" css={{ fontWeight: '$regular' }}>
        SEARCH
      </Text>
      <div>
        <TextInputContainer>
          <Input placeholder="Enter your search key word" />
          <IconButton type="submit" aria-label="search button">
            <FaSearch size={26} />
          </IconButton>
        </TextInputContainer>
      </div>
    </Form>
  );
}
