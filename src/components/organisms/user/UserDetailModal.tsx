import { memo, VFC } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          {/* FormControlがStackより内側にあるとspacingが効かない（理由不明） */}
          <FormControl>
            <Stack spacing={2}>
              <FormLabel>名前</FormLabel>
              <Input value="じゃけぇ" isReadOnly />
              <FormLabel>フルネーム</FormLabel>
              <Input value="Takumi Okada" isReadOnly />
              <FormLabel>MAIL</FormLabel>
              <Input value="123@gmail.com" isReadOnly />
              <FormLabel>TEL</FormLabel>
              <Input value="080-xxxx-xxxx" isReadOnly />
            </Stack>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
