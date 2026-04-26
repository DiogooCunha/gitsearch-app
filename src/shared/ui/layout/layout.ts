import styled from 'styled-components';

// Display flex entre navbar e conteudo
export const AppLayout = styled.div`
    display: flex;
`;

// Conteudo principal com margem para a navbar com propriedade para saber se eh rota protegida ou nao
export const MainContent = styled.main<{ $hasSidebar: boolean }>`
    margin-left: ${({ $hasSidebar }) => ($hasSidebar ? '255px' : '0')};
    flex: 1;
`;