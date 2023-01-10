import { Text, styled } from '@whatanime/design-system';

export const Container = styled('section', {
  width: '100%',
  py: '$8',
  gap: '$12',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Heading = styled(Text, {
  fontWeight: '$regular',
});

export const Box = styled('div', {
  width: '100%',
});
