import {format, parseISO} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const formatDate = (release_date) => {
    return format(parseISO(release_date), 'dd/MM/yyyy', {
        locale: ptBR,
    });
};