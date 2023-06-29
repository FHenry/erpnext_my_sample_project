from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in my_sample_project/__init__.py
from my_sample_project import __version__ as version

setup(
	name="my_sample_project",
	version=version,
	description="A Sample Test App",
	author="scopen",
	author_email="florian.henry@scopen.fr",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
