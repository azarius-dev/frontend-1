import { Button, Flexbox } from '@core/components';
import { GithubIcon, MediumIcon, TelegramIcon, TwitterIcon, DiscordIcon } from '@assets';
import {
	StyledSidebar,
	StyledLogo,
	StyledLogoText,
	StyledSection,
	StyledSocialList,
	StyledSocialIcon
} from './sidebar.styles';

const Sidebar = ({ children }) => {
	const socialList = [
		{
			title: 'Twitter',
			icon: <TwitterIcon />,
			url: 'https://twitter.com/UwU_Capital'
		},
		{
			title: 'Telegram',
			icon: <TelegramIcon />,
			url: 'https://t.me/UwUCapital'
		}
	];

	const renderSocialList = () => {
		return socialList.map((social) => {
			const { title, icon, url } = social;
			return (
				<StyledSocialIcon key={title} title={title} href={url} target="_blank">
					{icon}
				</StyledSocialIcon>
			);
		});
	};

	return (
		<StyledSidebar>
			<StyledLogo>
				<StyledLogoText>uwu</StyledLogoText>
			</StyledLogo>
			<StyledSection style={{ flexGrow: 1 }}>{children}</StyledSection>
			<StyledSection>
				<Flexbox gap="15px">
					<Button as="a" href="" target="_blank">
						trade uwu
					</Button>
					<Button as="a" href="https://debase-bridge.netlify.app/" target="_blank">
						eth bridge
					</Button>
				</Flexbox>
			</StyledSection>
			<StyledSection>
				<StyledSocialList>{renderSocialList()}</StyledSocialList>
			</StyledSection>
		</StyledSidebar>
	);
};

export default Sidebar;
