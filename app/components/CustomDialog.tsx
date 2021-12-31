import * as React from 'react';
import {Button, Paragraph, Dialog, Portal, Provider} from 'react-native-paper';

const CustomDialog = props => {
  return (
    <Provider>
      <Portal>
        <Dialog visible={props.visible} onDismiss={() => props.onClose(false)}>
          <Dialog.Title>{props.titulo}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{props.mensagem}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => props.onClose(false)}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export default CustomDialog;
