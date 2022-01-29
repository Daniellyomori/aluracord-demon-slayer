import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';

function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag}{
                    color: ${appConfig.theme.colors.neutrals['000']};
                    font-size: 24px;
                    font-weight: 600;
                    margin: auto;
                }
                `}</style>
        </>


    );
}

export default function PaginaErro() {
    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.neutrals['000'],
                    backgroundImage: 'url(https://i.pinimg.com/originals/ff/b8/1a/ffb81a03a884fce93c8d1fc31f67bb76.png)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                    }}
                >
                    <Titulo tag="h2" alignItems='center'>Você não é bem vindo aqui! ¯\_(ツ)_/¯</Titulo>
                </Box>

            </Box>
        </>
    )
}