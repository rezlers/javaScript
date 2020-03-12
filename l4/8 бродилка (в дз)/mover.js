let mover = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        // Доступные значения ввода.
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];

        while (true) {
            // Получаем от пользователя направление.
            let direction = parseInt(prompt('Введите число (1, 2, 3, 4, 5, 6, 7, 8 или 9), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }

            // Если направление не одно из доступных, то сообщаем что надо ввести корректные данные
            // и начинаем новую итерацию.
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7 , 8 или 9.');
                continue;
            }

            // Если пользователь ввел корректное значение - отдаем его.
            return direction;
        }
    },

    isMoveValidate(direction) {
        switch (direction) {
            case 1:
                if (player.x === 0 || player.y === 0)
                    return false;
                break;
            case 2:
                if (player.y === 0)
                    return false;
                break;
            case 3:
                if (player.x === 0 || player.y === 0)
                    return false;
                break;
            case 4:
                if (player.x === 0 || player.y === 0)
                    return false;
                break;
            case 6:
                if (player.x === 0 || player.y === 0)
                    return false;
                break;
            case 7:
                if (player.x === 0 || player.y === 0)
                    return false;
                break;
            case 8:
                if (player.x === 0 || player.y === 0)
                    return false;
                break;
            case 9:
                if (player.x === 0 || player.y === 0)
                    return false;
                break;
        }
    },

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x: int, y: int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        // Следующая точка игрока, в самом начале в точке будут текущие координаты игрока.
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        // Определяем направление и обновляем местоположение игрока в зависимости от направления.
        switch (direction) {
            case 1:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y--;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y++;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y++;
                break;
        }

        return nextPosition;
    },
};