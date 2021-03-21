import { Button, Flexbox } from '@core/components';
import { GithubIcon, TelegramIcon, TwitterIcon } from '@assets';
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
			title: 'Github',
			icon: <GithubIcon />,
			url: 'https://github.com/UwU-Captial'
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
				<StyledSocialIcon key={title} title={title} href={url} target="_blank" rel="noopener noreferrer">
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
					<Button as="a" href="https://debase-bridge.netlify.app/" target="_blank" rel="noopener noreferrer">
						eth bridge
					</Button>
					<Button
						as="a"
						href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
						target="_blank"
						rel="noopener noreferrer"
					>
						get wbnb
					</Button>
					{/* <Button as="a" href="" target="_blank" rel="noopener noreferrer">
						trade uwu
					</Button> */}
				</Flexbox>
			</StyledSection>
			<StyledSection>
				<StyledSocialList>{renderSocialList()}</StyledSocialList>
			</StyledSection>
		</StyledSidebar>
	);
};

export default Sidebar;
