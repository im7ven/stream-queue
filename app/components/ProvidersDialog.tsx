import {
  Box,
  Button,
  Callout,
  Dialog,
  Flex,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { MediaDetail } from "../hooks/useMediaDetails";
Image;

type Props = {
  media: MediaDetail;
};

const logoPath = "https://image.tmdb.org/t/p/w200";

const ProvidersDialog = ({ media }: Props) => {
  const streamProviders = media["watch/providers"].results.US.flatrate;
  const rentProviders = media["watch/providers"].results.US.rent;

  console.log(media["watch/providers"]);

  return (
    <Box mt="4">
      <Dialog.Root>
        <Dialog.Trigger>
          <Button className="items-center text-[#efc332] font-extrabold underline">
            <FaPlay size="15px" />
            Where to Watch
          </Button>
        </Dialog.Trigger>
        <Dialog.Content maxWidth="450px" aria-describedby={undefined}>
          <Dialog.Title>Where to Watch</Dialog.Title>

          <Heading size="2" className="uppercase">
            Stream:
          </Heading>
          <Flex mt="3" direction="column" gap="2">
            {streamProviders ? (
              streamProviders?.map((provider) => (
                <Flex align="center" gap="3" key={provider.provider_id}>
                  <Image
                    src={logoPath + provider.logo_path}
                    height={50}
                    width={50}
                    alt={provider.provider_name + "logo"}
                  />
                  <Text>{provider.provider_name}</Text>
                </Flex>
              ))
            ) : (
              <Callout.Root>
                <Callout.Icon>
                  <BsInfoCircleFill />
                </Callout.Icon>
                <Callout.Text>
                  Currently not available for streaming in your region
                </Callout.Text>
              </Callout.Root>
            )}
          </Flex>
          <Separator my="3" size="4" />

          <Heading size="2" className="uppercase">
            Rent:
          </Heading>
          <Flex mt="3" direction="column" gap="2">
            {rentProviders ? (
              rentProviders?.map((provider) => (
                <Flex align="center" gap="3" key={provider.provider_id}>
                  <Image
                    src={logoPath + provider.logo_path}
                    height={50}
                    width={50}
                    alt={provider.provider_name + "logo"}
                  />
                  <Text>{provider.provider_name}</Text>
                </Flex>
              ))
            ) : (
              <Callout.Root>
                <Callout.Icon>
                  <BsInfoCircleFill />
                </Callout.Icon>
                <Callout.Text>
                  Currently not available for renting in your region
                </Callout.Text>
              </Callout.Root>
            )}
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </Box>
  );
};

export default ProvidersDialog;
